provider "google-beta" {
  project     = "sensen-ventures"
  credentials = file("../credentials/sensen-ventures-b93e930d34d1.json")
}
locals {
  appname      = "home"
  path_for_app = "home"
}

####
####
#  Build step: Deploy Home App to bucket
####
####
resource "google_cloudbuild_trigger" "home_deployer" {
  provider = google-beta
  name     = "home-deployer"

  substitutions = {
    _PATH = local.path_for_app
  }

  github {
    name  = "mfe-react-single-spa"
    owner = "robertkibet"
    push {
      branch = "main"
    }
  }
  build {
    step {
      name       = "gcr.io/cloud-builders/yarn"
      entrypoint = "yarn"
      dir        = "$${_PATH}"
      args       = ["install"]
    }
    step {
      name       = "gcr.io/cloud-builders/yarn"
      entrypoint = "yarn"
      dir        = "$${_PATH}"
      args       = ["bump:version:commit"]
    }
    step {
      name       = "gcr.io/cloud-builders/yarn"
      entrypoint = "yarn"
      dir        = "$${_PATH}"
      args       = ["build"]
    }
    step {
      name = "gcr.io/cloud-builders/gsutil"
      dir  = "$${_PATH}"
      # args = ["cp", "-r", "dist/*${local.appname}*", "gs://demo-spa/${local.appname}/build-$COMMIT_SHA/"]
      args = ["cp", "-r", "dist/*${local.appname}*", "gs://demo-spa/${local.appname}/"]
    }
    # step {
    #   name = "gcr.io/cloud-builders/gsutil"
    #   id = "Send assets to bucket"
    #   dir = "$${_PATH}"
    #   args = ["cp", "-r", "src/assets", "gs://demo-spa/${local.appname}/build-$COMMIT_SHA/"]
    # }
  }
  included_files = ["${local.path_for_app}/**"]
  ignored_files = [
    "${local.path_for_app}/terraform/**",
    "${local.path_for_app}/package.json"
  ]
}

output "build_trigger_data" {
  description = "Url to the trigger status"
  value       = "https://console.cloud.google.com/cloud-build/builds?query=trigger_id%3D%22${google_cloudbuild_trigger.home_deployer.trigger_id}%22"
}
