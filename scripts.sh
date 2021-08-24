find ../ -iname 'package.json' -not -path '*/node_modules/*' -execdir pwd \; -execdir yarn  \;
