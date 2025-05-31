import type {
	NodeConnectionType,
	INodeProperties,
	INodeTypeDescription,
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
