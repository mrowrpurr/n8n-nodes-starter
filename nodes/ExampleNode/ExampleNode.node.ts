import type {
	NodeConnectionType,
	INodeConnection,
	INodeProperties,
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	INodeTypeBaseDescription,
	NodeDefaults,
	INodeInputConfiguration,
	INodeOutputConfiguration,
	INodeCredentialDescription,
	INodeHookDescription,
	IWebhookDescription,
	NodeHint,
	ExpressionString,
	TriggerPanelDefinition,
	IN8nRequestOperations,
} from "n8n-workflow"

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

// export abstract class Node implements INodeType {
// 	abstract execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>

// 	get description(): INodeTypeDescription {
// 		return {
// 			displayName: this.constructor.name,
// 			name: this.constructor.name.charAt(0).toLowerCase() + this.constructor.name.slice(1),
// 			group: ["transform"],
// 			version: 1,
// 			description: `${this.constructor.name}`,
// 			defaults: { name: this.constructor.name },
// 			inputs: [NodeConnectionType.Main],
// 			outputs: [NodeConnectionType.Main],
// 			properties: [],
// 		}
// 	}
// }

// export class ExampleNode extends Node {
// 	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {

// 		return [[{ json: { message: "Hello, world." } }]]
// 	}
// }

// // nodeDetails is a function that's a global function
// function nodeDetails() : INodeTypeDescription {
// 	return {
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
// }

// export class AnotherNode implements INodeType {
// 	description: INodeTypeDescription = nodeDetails()

// 	// If we did extends Node,
// 	// and nodeDetails were like a static/class method...
// 	// then would we be able to use it like this?
// 	// description = nodeDetails()

// 	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
// 		return [[{ json: { message: "Hello from Another Node!" } }]]
// 	}
// }

/*
export interface INodeTypeDescription extends INodeTypeBaseDescription {
    version: number | number[];
    defaults: NodeDefaults;
    eventTriggerDescription?: string;
    activationMessage?: string;
    inputs: Array<NodeConnectionType | INodeInputConfiguration> | ExpressionString;
    requiredInputs?: string | number[] | number;
    inputNames?: string[];
    outputs: Array<NodeConnectionType | INodeOutputConfiguration> | ExpressionString;
    outputNames?: string[];
    properties: INodeProperties[];
    credentials?: INodeCredentialDescription[];
    maxNodes?: number;
    polling?: true | undefined;
    supportsCORS?: true | undefined;
    requestDefaults?: DeclarativeRestApiSettings.HttpRequestOptions;
    requestOperations?: IN8nRequestOperations;
    hooks?: {
        [key: string]: INodeHookDescription[] | undefined;
        activate?: INodeHookDescription[];
        deactivate?: INodeHookDescription[];
    };
    webhooks?: IWebhookDescription[];
    translation?: {
        [key: string]: object;
    };
    mockManualExecution?: true;
    triggerPanel?: TriggerPanelDefinition | boolean;
    extendsCredential?: string;
    hints?: NodeHint[];
    __loadOptionsMethods?: string[];
} */

export class NodeTypeDescriptionBase implements INodeTypeDescription {
	constructor(
		private _displayName: string,
		private _name: string,
		private _group: string[],
		private _version: number | number[],
		private _description: string,
		private _defaults: NodeDefaults,
		private _inputs: Array<NodeConnectionType | INodeInputConfiguration> | ExpressionString,
		private _outputs: Array<NodeConnectionType | INodeOutputConfiguration> | ExpressionString,
		private _properties: INodeProperties[],
		private _outputNames?: string[],
		private _inputNames?: string[],
		private _credentials?: INodeCredentialDescription[],
		private _eventTriggerDescription?: string,
		private _activationMessage?: string,
		private _requiredInputs?: string | number[] | number,
		private _maxNodes?: number,
		private _polling?: true,
		private _supportsCORS?: true,
		private _requestDefaults?: any,
		private _requestOperations?: IN8nRequestOperations,
		private _hooks?: {
			[key: string]: INodeHookDescription[] | undefined
			activate?: INodeHookDescription[]
			deactivate?: INodeHookDescription[]
		},
		private _webhooks?: IWebhookDescription[],
		private _translation?: { [key: string]: object },
		private _mockManualExecution?: true,
		private _triggerPanel?: TriggerPanelDefinition | boolean,
		private _extendsCredential?: string,
		private _hints?: NodeHint[],
		private ___loadOptionsMethods?: string[]
	) {}

	get displayName() {
		return this._displayName
	}
	get name() {
		return this._name
	}
	get group() {
		return this._group
	}
	get version() {
		return this._version
	}
	get description() {
		return this._description
	}
	get defaults() {
		return this._defaults
	}
	get inputs() {
		return this._inputs
	}
	get outputs() {
		return this._outputs
	}
	get properties() {
		return this._properties
	}
	get outputNames() {
		return this._outputNames
	}
	get inputNames() {
		return this._inputNames
	}
	get credentials() {
		return this._credentials
	}
	get eventTriggerDescription() {
		return this._eventTriggerDescription
	}
	get activationMessage() {
		return this._activationMessage
	}
	get requiredInputs() {
		return this._requiredInputs
	}
	get maxNodes() {
		return this._maxNodes
	}
	get polling() {
		return this._polling
	}
	get supportsCORS() {
		return this._supportsCORS
	}
	get requestDefaults() {
		return this._requestDefaults
	}
	get requestOperations() {
		return this._requestOperations
	}
	get hooks() {
		return this._hooks
	}
	get webhooks() {
		return this._webhooks
	}
	get translation() {
		return this._translation
	}
	get mockManualExecution() {
		return this._mockManualExecution
	}
	get triggerPanel() {
		return this._triggerPanel
	}
	get extendsCredential() {
		return this._extendsCredential
	}
	get hints() {
		return this._hints
	}
	get __loadOptionsMethods() {
		return this.___loadOptionsMethods
	}
}

export class NodeBuilder {
	private desc: INodeTypeDescription

	constructor(displayName: string, name: string) {
		this.desc = {
			displayName,
			name,
			group: [],
			version: 1,
			description: `${this.constructor.name}`,
			defaults: { name: displayName },
			inputs: [],
			outputs: [],
			properties: [],
		}
	}

	group(group: string): this {
		this.desc.group = [group]
		return this
	}

	version(version: number): this {
		this.desc.version = version
		return this
	}

	description(text: string): this {
		this.desc.description = text
		return this
	}

	input(port: NodeConnectionType): this {
		this.desc.inputs.push(port)
		return this
	}

	output(port: NodeConnectionType): this {
		this.desc.outputs.push(port)
		return this
	}

	string(name: string, displayName: string): this {
		this.desc.properties.push({
			name,
			displayName,
			type: "string",
			default: "",
		})
		return this
	}

	boolean(name: string, displayName: string): this {
		this.desc.properties.push({
			name,
			displayName,
			type: "boolean",
			default: false,
		})
		return this
	}

	default(value: unknown): this {
		const last = this.desc.properties[this.desc.properties.length - 1]
		if (last) last.default = value
		return this
	}

	build(): INodeTypeDescription {
		return this.desc
	}
}

export function node(displayName: string, name?: string): NodeBuilder {
	return new NodeBuilder(
		displayName,
		name ?? displayName.charAt(0).toLowerCase() + displayName.slice(1)
	)
}
