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
                                            'data-bs-target="#components-links-module-AppModule-a59eb867cd9a1ec30d745e0dc445b91c636d2a1249d2eae2e927dcb3e74820a31ea3002116fa25edf8920c9815f475be4941693613117e267dfcce1d3b17ef46"' : 'data-bs-target="#xs-components-links-module-AppModule-a59eb867cd9a1ec30d745e0dc445b91c636d2a1249d2eae2e927dcb3e74820a31ea3002116fa25edf8920c9815f475be4941693613117e267dfcce1d3b17ef46"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a59eb867cd9a1ec30d745e0dc445b91c636d2a1249d2eae2e927dcb3e74820a31ea3002116fa25edf8920c9815f475be4941693613117e267dfcce1d3b17ef46"' :
                                            'id="xs-components-links-module-AppModule-a59eb867cd9a1ec30d745e0dc445b91c636d2a1249d2eae2e927dcb3e74820a31ea3002116fa25edf8920c9815f475be4941693613117e267dfcce1d3b17ef46"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
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
                                            'data-bs-target="#components-links-module-StartModule-2c111a00efb6735428c9cd9b295f84783c3176169eef1ee182c39e2b1422fbe8c795b1f587f97de043d5457cd6d20f7a5b394fd37f3cded46496192032dd8310"' : 'data-bs-target="#xs-components-links-module-StartModule-2c111a00efb6735428c9cd9b295f84783c3176169eef1ee182c39e2b1422fbe8c795b1f587f97de043d5457cd6d20f7a5b394fd37f3cded46496192032dd8310"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StartModule-2c111a00efb6735428c9cd9b295f84783c3176169eef1ee182c39e2b1422fbe8c795b1f587f97de043d5457cd6d20f7a5b394fd37f3cded46496192032dd8310"' :
                                            'id="xs-components-links-module-StartModule-2c111a00efb6735428c9cd9b295f84783c3176169eef1ee182c39e2b1422fbe8c795b1f587f97de043d5457cd6d20f7a5b394fd37f3cded46496192032dd8310"' }>
                                            <li class="link">
                                                <a href="components/StartPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StartPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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