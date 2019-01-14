// import component from './startEvent.vue';
import joint from 'jointjs';

export default {
  id: 'processmaker-modeler-start-event',
  shape: joint.shapes.standard.Circle,
  attrs: {
    body: { stroke: '#00bf9c', fill: '#EDFFFC' },
    label: { refY: '130%' },
  },
  // component,
  bpmnType: 'bpmn:StartEvent',
  control: true,
  category: 'BPMN',
  icon: require('@/assets/toolpanel/start-event.svg'),
  label: 'Start Event',
  definition(moddle) {
    return moddle.create('bpmn:StartEvent', {
      name: 'Start Event',
    });
  },
  diagram(moddle) {
    return moddle.create('bpmndi:BPMNShape', {
      bounds: moddle.create('dc:Bounds', {
        height: 36,
        width: 36,
        x: null,
        y: null,
      }),
    });
  },
  /**
   * Validate whether to accept an incoming flow from the node
   *
   * @param node
   */
  validateIncoming() {
    return false;
  },
  inspectorConfig: [
    {
      name: 'Start Event',
      items: [
        {
          component: 'FormText',
          config: {
            label: 'Start Event',
            fontSize: '2em',
          },
        },
        {
          component: 'FormInput',
          config: {
            label: 'Identifier',
            helper: 'The id field should be unique across all elements in the diagram',
            name: 'id',
          },
        },
        {
          component: 'FormInput',
          config: {
            label: 'Name',
            helper: 'The Name of the Start Event',
            name: 'name',
          },
        },
      ],
    },
  ],
};
