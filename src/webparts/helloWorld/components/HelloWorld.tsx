import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    
    const events: any[] = [{ID:1, EventId:'2245'},{ID:2, EventId:'4711'}]

    return (
     
      <div>
        <Grid style={{height:"400px"}} data={events}>
          <GridColumn field="ID" title='ID' width={'40px'}></GridColumn>
          <GridColumn field="EventId" title='EventId' width={'200px'}></GridColumn>
        </Grid>
      </div>

    );
  }
}
