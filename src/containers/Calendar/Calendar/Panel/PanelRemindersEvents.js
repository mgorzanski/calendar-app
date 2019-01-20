import React from 'react';
import Panel from './../../../../components/Panel';
import './PanelRemindersEvents.css';

export default class PanelRemindersEvents extends React.Component {
  render() {
    return (
      <Panel
          featuredIcon="fas fa-bell"
          name="Reminders"
          actionIcon="fas fa-plus"
          onActionIconPress={() => console.log('Press')}
        >

      </Panel>
    );
  }
}