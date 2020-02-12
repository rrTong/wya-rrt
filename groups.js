import { Draggable } from '@shopify/draggable';

// const people = document.querySelectorAll('.person');

// const draggable = new Draggable(people, {
//     draggable: true,
//     delay: 0
// })

// return draggable;

const container = document.querySelectorAll('#groupsView');
const draggable = new Draggable.Draggable(container, {
  draggable: '.person'
})

draggable.on('drag:start', (e) => console.log(e));
draggable.on('drag:move',  (e) => console.log(e));
draggable.on('drag:over',  (e) => console.log(e));
draggable.on('drag:pressure',  (e) => console.log(e));
draggable.on('drag:out',  (e) => console.log(e));
draggable.on('drag:stop',  (e) => console.log(e));
draggable.on('mirror:created',  (e) => console.log(e));
draggable.on('mirror:attached',  (e) => console.log(e));
draggable.on('mirror:move',  (e) => console.log(e));
