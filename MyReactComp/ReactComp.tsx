import * as React from "react";
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";
import { Facepile, IFacepilePersona, IFacepileProps, OverflowButtonType } from "office-ui-fabric-react/lib/Facepile";
import { PersonaSize } from "office-ui-fabric-react/lib/Persona";
import { Slider } from "office-ui-fabric-react/lib/Slider";

import { setIconOptions } from "office-ui-fabric-react/lib/Styling";

// Suppress office UI fabric icon warnings.
setIconOptions({
  disableWarnings: true,
});

export interface IReactCompProps {
    myvalue: string
}

export interface IReactCompState extends React.ComponentState, IReactCompProps {
    
}

export class ReactComp extends React.Component<IReactCompProps, IReactCompState> {
  constructor(props: IReactCompProps) {
    super(props);

    this.state = {
      myvalue:"Hello 365 Saturday!"
    };
  }

  public componentWillReceiveProps(newProps: IReactCompProps): void {
    this.setState(newProps);
  }

  public render(): JSX.Element {
    return (
      <div>
        {this.state.myvalue} 
        </div>
    );
  } 
}