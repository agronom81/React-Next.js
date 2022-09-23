# make create n="SomeName"
create:
	mkdir "$n"
	echo "import {$nProps} from './$n.props';\nimport styles from './$n.module.css';\nimport cn from 'classnames';\n\nexport const $n = ({children}: $nProps): JSX.Element => {return (<></>);};" > "$n/$n.tsx"
	echo "export interface $nProps {}" > "$n/$n.props.ts"
	touch "$n/$n.module.css"
	echo "export * from './$n/$n';" >> "index.ts"