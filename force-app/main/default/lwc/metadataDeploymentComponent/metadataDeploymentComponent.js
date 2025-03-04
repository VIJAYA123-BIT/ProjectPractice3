import { LightningElement ,wire,track} from 'lwc';
import firstmetadataApi from '@salesforce/apex/metadataApi.FirstmetadataApi';
import { publish,MessageContext } from 'lightning/messageService';
import MetadataDeploymentlms from '@salesforce/messageChannel/MetadataDeploymentlms__c';
export default class MetadataDeploymentComponent extends LightningElement {
    userInput='';
    selectedIndustry='';
    userSelectedValue = '';
    @track picklistValues= [];
    @track picklistValues1 =[];
    listOfContents =['AccountRelationshipShareRule','ActionLinkGroupTemplate','ApexClass','ApexComponent',
        'ApexPage','ApexTrigger','AppMenu','ApprovalProcess','ArticleType','AssignmentRules','Audience','AuthProvider',
        'AuraDefinitionBundle','AutoResponseRules','Bot','BrandingSet','CallCenter','Certificate','CleanDataService',
        'CMSConnectSource','Community','CommunityTemplateDefinition','CommunityThemeDefinition','CompactLayout',
        'ConnectedApp','ContentAsset','CorsWhitelistOrigin','CustomApplication','CustomApplicationComponent',
        'CustomFeedFilter','CustomHelpMenuSection','CustomMetadata','CustomLabels','CustomObjectTranslation',
        'CustomPageWebLink','CustomPermission','CustomSite','CustomTab','DataCategoryGroup','DelegateGroup',
        'DuplicateRule','EclairGeoData','EntitlementProcess','EntitlementTemplate','EventDelivery','EventSubscription',
        'ExternalServiceRegistration','ExternalDataSource','FeatureParameterBoolean','FeatureParameterDate','FeatureParameterInteger',
        'FieldSet','FlexiPage','Flow','FlowCategory','FlowDefinition','GlobalValueSet','GlobalValueSetTranslation','Group','HomePageComponent',
        'HomePageLayout','InstalledPackage','KeywordList','Layout','LightningBolt','LightningComponentBundle','LightningExperienceTheme',
        'LiveChatAgentConfig','LiveChatButton','LiveChatDeployment','LiveChatSensitiveDataRule','ManagedTopics','MatchingRules','MilestoneType',
        'MlDomain','ModerationRule','NamedCredential','Network','NetworkBranding','PathAssistant','PermissionSet','PlatformCachePartition',
        'Portal','PostTemplate','PresenceDeclineReason','PresenceUserConfig','Profile','ProfilePasswordPolicy','ProfileSessionSetting',
        'Queue','QueueRoutingConfig','QuickAction','RecommendationStrategy','RecordActionDeployment','ReportType','Role','SamlSsoConfig',
        'Scontrol','ServiceChannel','ServicePresenceStatus','SharingRules','SharingSet','SiteDotCom','Skill','StandardValueSetTranslation',
        'StaticResource','SynonymDictionary','Territory','Territory2','Territory2Model','Territory2Rule','Territory2Type','TopicsForObjects',
        'TransactionSecurityPolicy','Translations','WaveApplication','WaveDashboard','WaveDataflow','WaveDataset','WaveLens','WaveTemplateBundle',
        'WaveXmd','Workflow','ActionPlanTemplate','AnimationRule','ChannelLayout', 'ApexTestSuite',
        'AppointmentSchedulingPolicy','CampaignInfluenceModel','ChatterExtension', 'CspTrustedSite', 
        'CompactLayout', 'ExperienceBundle','LightningMessageChannel','MyDomainDiscoverableLogin','NavigationMenu','OauthCustomScope',
        'PaymentGatewayProvider', 'PlatformEventChannel','PlatformEventChannelMember','Prompt','RedirectWhitelistUrl', 'Settings', 'TimeSheetTemplate','WaveRecipe','WorkSkillRouting'];
        inputHandler(event){
            let matchedValues = [];
            this.userInput=event.target.value;
            console.log('selected industry 122 is: '+this.userInput);
            this.listOfContents.forEach((ele) => {
                if(ele.toLowerCase().includes(this.userInput)){
                    matchedValues.push(ele);
            }
        });
            if(matchedValues.length>0){
                this.picklistValues= matchedValues
                console.log('the picklist 121 are '+ this.picklistValues)

                //this.picklistValues1= matchedValues.map(item => ({label: item, value: item}));
            }
        }
        userSelectedValue=''
        handleClick(event){
            const index = event.currentTarget.dataset.index;
            const selectedValue = this.picklistValues[index];
            this.userSelectedValue = selectedValue;
            console.log('Selected Value:', selectedValue);
           
        }
        @track firstcolumn=[]
        @wire(MessageContext) messageContext;
        @wire (firstmetadataApi ,{ComponentName :'$userSelectedValue'})
        wiredValues({error,data}) {
            if (data) {
                console.log('the data is '+data);
                this.firstcolumn = data;
                console.log('the first column values are: '+JSON.stringify(this.firstcolumn));
                const payload ={ UserSelectedOption : this.firstcolumn}
                publish(this.messageContext , MetadataDeploymentlms, payload);
            } else if (error) {
                console.error('Error fetching accounts:', error);
            }} 
        
}