/* eslint-disable @typescript-eslint/naming-convention */

export const SQL_NODE_TYPES = [
	'n8n-nodes-base.postgres',
	'n8n-nodes-base.mySql',
	'n8n-nodes-base.microsoftSql',
	'n8n-nodes-base.crateDb',
	'n8n-nodes-base.questDb',
	'n8n-nodes-base.snowflake',
	'n8n-nodes-base.timescaleDb',
];

export const WEBHOOK_NODE_TYPE = 'n8n-nodes-base.webhook';

export const WEBHOOK_VALIDATOR_NODE_TYPES = ['n8n-nodes-base.if', 'n8n-nodes-base.switch'];

export const SENSITIVE_NODE_TYPES = [
	'n8n-nodes-base.executeCommand',
	'n8n-nodes-base.executeWorkflow',
	'n8n-nodes-base.function',
	'n8n-nodes-base.functionItem',
	'n8n-nodes-base.code',
	'n8n-nodes-base.httpRequest',
];

export const RISKS = {
	SQL_INJECTION: 'SQL injection',
	SENSITIVE_NODES: 'Sensitive nodes',
	INACTIVE_CREDS: 'Inactive creds',
	OPEN_WEBHOOKS: 'Open webhooks',
	OUTDATED_INSTANCE: 'Outdated instance',
};
