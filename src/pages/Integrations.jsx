import {Link} from 'react-router-dom'
import {
    Cloud,
    Key,
    Code,
    Ticket,
    Lock,
    Database,
    ArrowRight,
    CheckCircle2
} from 'lucide-react'
import './Integrations.css'

const integrationCategories = [
    {
        id: 'erp',
        name: 'ERP Integration',
        icon: Database,
        description: 'Connect your enterprise resource planning systems for comprehensive compliance monitoring.',
        integrations: [
            { name: 'SAP Business Suite on HANA', description: 'Accelerated ERP operations on HANA' },
            { name: 'Salesforce', description: 'Cloud CRM with logs and audit data' },
            { name: 'SAP S/4HANA Public Cloud', description: 'Standardized, best-practice cloud ERP' },
            { name: 'SAP S/4HANA Private Cloud', description: 'Flexible, customizable SAP S/4 environment' }


        ]
    },
    {
        id: 'cloud',
        name: 'Cloud Providers',
        icon: Cloud,
        description: 'Connect your cloud infrastructure for automated evidence collection.',
        integrations: [
            {name: 'AWS', description: 'CloudTrail, IAM, S3, Config, and more'},
            {name: 'Azure', description: 'Activity Log, Azure AD, Defender, and more'},
            {name: 'Google Cloud', description: 'Cloud Logging, IAM, Security Command Center'}
        ]
    },
    {
        id: 'identity',
        name: 'Identity & Access',
        icon: Key,
        description: 'Automate access reviews and identity governance.',
        integrations: [
            {name: 'Okta', description: 'SSO logs, user provisioning, MFA status'},
            {name: 'Azure AD', description: 'Directory sync, access reviews, sign-in logs'},
            {name: 'Google Workspace', description: 'User management, security settings'}
        ]
    },
    {
        id: 'ticketing',
        name: 'Ticketing & ITSM',
        icon: Ticket,
        description: 'Link violations to remediation workflows.',
        integrations: [
            {name: 'Jira', description: 'Issue creation, status sync, SLA tracking'},
            {name: 'ServiceNow', description: 'Incident management, CMDB sync'},
            {name: 'Linear', description: 'Issue linking, project sync'}
        ]
    },
    {
        id: 'security',
        name: 'Security Tools',
        icon: Lock,
        description: 'Import findings from your security stack.',
        integrations: [
            {name: 'CrowdStrike', description: 'Endpoint protection status, detections'},
            {name: 'Wiz', description: 'Cloud security findings, misconfigurations'},
            {name: 'Datadog', description: 'Monitoring data, security signals'},
            {name: 'Snyk', description: 'Vulnerability scan results, dependency health'}
        ]
    }
]

function Integrations() {
    return (
        <div className="page integrations-page">
            {/* Hero */}
            <section className="integrations-hero">
                <div className="container">
                    <h1>Connect your <span className="gradient-text">entire stack</span></h1>
                    <p>Automate evidence collection from 50+ integrations across cloud, identity, dev tools, and
                        security.</p>
                </div>
            </section>

            {/* Integration Categories */}
            <section className="section">
                <div className="container">
                    <div className="integration-categories">
                        {integrationCategories.map((category) => (
                            <div key={category.id} className="integration-category">
                                <div className="category-header">
                                    <div className="icon-box icon-box-lg">
                                        <category.icon size={28}/>
                                    </div>
                                    <div>
                                        <h2>{category.name}</h2>
                                        <p>{category.description}</p>
                                    </div>
                                </div>
                                <div className="category-integrations">
                                    {category.integrations.map((integration) => (
                                        <div key={integration.name} className="integration-item card">
                                            <div className="integration-icon">
                                                {integration.name.charAt(0)}
                                            </div>
                                            <div className="integration-info">
                                                <h4>{integration.name}</h4>
                                                <p>{integration.description}</p>
                                            </div>
                                            <CheckCircle2 size={20} className="integration-check"/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Integration */}
            <section className="section">
                <div className="container">
                    <div className="custom-integration card">
                        <div className="custom-integration-content">
                            <h2>Need a custom integration?</h2>
                            <p>We support custom integrations via our API and webhook system. Our team can help you
                                connect any data source.</p>
                            <div className="custom-features">
                                <span className="badge">REST API</span>
                                <span className="badge">Webhooks</span>
                                <span className="badge">Custom Collectors</span>
                            </div>
                        </div>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Talk to Us
                            <ArrowRight size={20}/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Integrations
