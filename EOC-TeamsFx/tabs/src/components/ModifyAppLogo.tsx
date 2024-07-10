import React from "react";
import { Button, ChevronStartIcon, Flex } from "@fluentui/react-northstar";
import { Label } from "@fluentui/react/lib/Label";
import { Icon } from "@fluentui/react/lib/Icon";
import siteConfig from "../config/siteConfig.json";

export interface IModifyAppLogoProps {
    localeStrings: any;
    onBackClick(showMessageBar: string): void;
    tenantName: string;
    siteName: any;
}
export default class ModifyAppLogo extends React.PureComponent<IModifyAppLogoProps> {

    public render() {
        return (
            <div className='config-settings-wrapper'>
                <div className='settings-sub-wrapper'>
                    <div className={`config-settings-app-title-wrapper`}>
                        <div className="app-title-label">
                            <div className="label-font">
                                <Label>To replace the app's logo click on the below link and upload the image for the new logo in the "TEOC-AppLogo" library. </Label>
                                <Label>The new image needs to have below specifications:</Label>
                                <ul>
                                    <li><Label>Name: AppLogo.jpg</Label></li>
                                    <li><Label>Type: JPG</Label></li>
                                    <li><Label>Dimensions: 32 X 32 </Label></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="config-settings-toggle-btn-wrapper">
                        <a
                            href={`https://${this.props.tenantName}/sites/${this.props.siteName}/${siteConfig.appLogoList.split('-').join("")}`}
                            target='_blank'
                            rel="noreferrer"
                            className='assign-roles-link'
                        >
                            <Button
                                text
                                icon={<Icon className="fwd-icon" iconName='Go' />}
                                content={this.props.localeStrings.uploadAppLogoButton}
                                title={this.props.localeStrings.uploadAppLogoButton}
                                iconPosition="after"
                                className="assign-roles-btn"
                                tabIndex={-1}
                            />
                        </a>
                    </div>

                </div>

                <div className="admin-settings-btn-wrapper">
                    <Flex hAlign="end" gap="gap.large" wrap={true}>
                        <Button
                            onClick={() => this.props.onBackClick("")}
                            className='admin-settings-back-btn'
                            fluid={true}
                            title={this.props.localeStrings.btnBack}
                            content={this.props.localeStrings.btnBack}
                        >
                            <ChevronStartIcon /> &nbsp;
                            <label>{this.props.localeStrings.btnBack}</label>
                        </Button>
                    </Flex>
                </div>
            </div>
        )
    }

}