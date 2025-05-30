import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from "n8n-workflow"
import { NodeConnectionType } from "n8n-workflow"

// export class ExampleNode implements INodeType {
// 	description: INodeTypeDescription = {
// 		displayName: "Example Node",
// 		name: "exampleNode",
// 		group: ["transform"],
// 		version: 1,
// 		description: "A minimal example node",
// 		defaults: {
// 			name: "Example Node",
// 		},
// 		inputs: [NodeConnectionType.Main],
// 		outputs: [NodeConnectionType.Main],
// 		properties: [],
// 	}

// 	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
// 		return [[{ json: { message: "Hello from Example Node!" } }]]
// 	}
// }

export abstract class Node implements INodeType {
	abstract execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>

	get description(): INodeTypeDescription {
		return {
			displayName: this.constructor.name,
			name: this.constructor.name.charAt(0).toLowerCase() + this.constructor.name.slice(1),
			group: ["transform"],
			version: 1,
			description: `${this.constructor.name}`,
			defaults: { name: this.constructor.name },
			inputs: [NodeConnectionType.Main],
			outputs: [NodeConnectionType.Main],
			properties: [],
		}
	}
}

export class ExampleNode extends Node {
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return [[{ json: { message: "Hello, world." } }]]
	}
}
