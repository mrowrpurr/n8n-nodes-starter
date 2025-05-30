import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from "n8n-workflow"
import { NodeConnectionType } from "n8n-workflow"

export class ExampleNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: "Example Node",
		name: "exampleNode",
		group: ["transform"],
		version: 1,
		description: "A minimal example node",
		defaults: {
			name: "Example Node",
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		properties: [],
	}

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return [[{ json: { message: "Hello from Example Node!" } }]]
	}
}
