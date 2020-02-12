var container = document.querySelectorAll('.container')
var draggable = new Draggable.Draggable(container, {
  draggable: '.draggable-source',
  // handle: null,
  // delay: 0,
  // native: false,
  // plugins: [Draggable.Draggable.Plugins.Mirror, Draggable.Draggable.Plugins.Accessibility],
  // appendTo: '.container',
  // classes: {}
});
draggable.on('drag:start', (e) => console.log(e));
draggable.on('drag:move',  (e) => console.log(e));
draggable.on('drag:over',  (e) => console.log(e));
draggable.on('drag:pressure',  (e) => console.log(e));
draggable.on('drag:out',  (e) => console.log(e));
draggable.on('drag:stop',  (e) => console.log(e));
draggable.on('mirror:created',  (e) => console.log(e));
draggable.on('mirror:attached',  (e) => console.log(e));
draggable.on('mirror:move',  (e) => console.log(e));

