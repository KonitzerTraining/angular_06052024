'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-fe6b376cbf0bfc0966cf7fb558f5ed0dff08a65805ef26592c7d58e3e01cac15fea5e8edfca6c095b9cc25eec8bff82d416d31d1998205fd754fdf78eed1170f"' : 'data-bs-target="#xs-components-links-module-AppModule-fe6b376cbf0bfc0966cf7fb558f5ed0dff08a65805ef26592c7d58e3e01cac15fea5e8edfca6c095b9cc25eec8bff82d416d31d1998205fd754fdf78eed1170f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-fe6b376cbf0bfc0966cf7fb558f5ed0dff08a65805ef26592c7d58e3e01cac15fea5e8edfca6c095b9cc25eec8bff82d416d31d1998205fd754fdf78eed1170f"' :
                                            'id="xs-components-links-module-AppModule-fe6b376cbf0bfc0966cf7fb558f5ed0dff08a65805ef26592c7d58e3e01cac15fea5e8edfca6c095b9cc25eec8bff82d416d31d1998205fd754fdf78eed1170f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CoreModule-dabca441e815ff659a9c873c0e1d5ce98d61eaf93bfcca58ceb2f48ea0bece65bec400edb12e311d5f08cbe9829a894531654aafb23482085132973cd81725b5"' : 'data-bs-target="#xs-components-links-module-CoreModule-dabca441e815ff659a9c873c0e1d5ce98d61eaf93bfcca58ceb2f48ea0bece65bec400edb12e311d5f08cbe9829a894531654aafb23482085132973cd81725b5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-dabca441e815ff659a9c873c0e1d5ce98d61eaf93bfcca58ceb2f48ea0bece65bec400edb12e311d5f08cbe9829a894531654aafb23482085132973cd81725b5"' :
                                            'id="xs-components-links-module-CoreModule-dabca441e815ff659a9c873c0e1d5ce98d61eaf93bfcca58ceb2f48ea0bece65bec400edb12e311d5f08cbe9829a894531654aafb23482085132973cd81725b5"' }>
                                            <li class="link">
                                                <a href="components/LoadingIndicatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingIndicatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainNavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainNavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomerModule.html" data-type="entity-link" >CustomerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CustomerModule-b2676a4d4383aa6e671d688d1ffa1a7954c96e7d3921c8cea1044a9a2a9bc6deae01a8719ef3ace73fbaa5c8a7abe6fea9e77f4f649148ffad4e90d5358831c3"' : 'data-bs-target="#xs-components-links-module-CustomerModule-b2676a4d4383aa6e671d688d1ffa1a7954c96e7d3921c8cea1044a9a2a9bc6deae01a8719ef3ace73fbaa5c8a7abe6fea9e77f4f649148ffad4e90d5358831c3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CustomerModule-b2676a4d4383aa6e671d688d1ffa1a7954c96e7d3921c8cea1044a9a2a9bc6deae01a8719ef3ace73fbaa5c8a7abe6fea9e77f4f649148ffad4e90d5358831c3"' :
                                            'id="xs-components-links-module-CustomerModule-b2676a4d4383aa6e671d688d1ffa1a7954c96e7d3921c8cea1044a9a2a9bc6deae01a8719ef3ace73fbaa5c8a7abe6fea9e77f4f649148ffad4e90d5358831c3"' }>
                                            <li class="link">
                                                <a href="components/CustomerEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerIndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerNewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerNewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomerRoutingModule.html" data-type="entity-link" >CustomerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LegalModule.html" data-type="entity-link" >LegalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LegalModule-75b55f31c812609295ba667f154fe162d126f7157948da91022db246c9f7f43538f886ac2207cbffc68d1786dab9803304cb0ed3d9d341085507b3ee43d345e0"' : 'data-bs-target="#xs-components-links-module-LegalModule-75b55f31c812609295ba667f154fe162d126f7157948da91022db246c9f7f43538f886ac2207cbffc68d1786dab9803304cb0ed3d9d341085507b3ee43d345e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LegalModule-75b55f31c812609295ba667f154fe162d126f7157948da91022db246c9f7f43538f886ac2207cbffc68d1786dab9803304cb0ed3d9d341085507b3ee43d345e0"' :
                                            'id="xs-components-links-module-LegalModule-75b55f31c812609295ba667f154fe162d126f7157948da91022db246c9f7f43538f886ac2207cbffc68d1786dab9803304cb0ed3d9d341085507b3ee43d345e0"' }>
                                            <li class="link">
                                                <a href="components/AboutPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LegalRoutingModule.html" data-type="entity-link" >LegalRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StartModule.html" data-type="entity-link" >StartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-StartModule-4fc42323c943cd0924f83d5fc47d42f9939d83c36de1cd9b59d743ca2edddf37f7668cf44ae250f9dc92701498b6775f335dab0f1ba0d880a8418fd8b650eeb3"' : 'data-bs-target="#xs-components-links-module-StartModule-4fc42323c943cd0924f83d5fc47d42f9939d83c36de1cd9b59d743ca2edddf37f7668cf44ae250f9dc92701498b6775f335dab0f1ba0d880a8418fd8b650eeb3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StartModule-4fc42323c943cd0924f83d5fc47d42f9939d83c36de1cd9b59d743ca2edddf37f7668cf44ae250f9dc92701498b6775f335dab0f1ba0d880a8418fd8b650eeb3"' :
                                            'id="xs-components-links-module-StartModule-4fc42323c943cd0924f83d5fc47d42f9939d83c36de1cd9b59d743ca2edddf37f7668cf44ae250f9dc92701498b6775f335dab0f1ba0d880a8418fd8b650eeb3"' }>
                                            <li class="link">
                                                <a href="components/StartPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StartPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CustomerService.html" data-type="entity-link" >CustomerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Customer.html" data-type="entity-link" >Customer</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});