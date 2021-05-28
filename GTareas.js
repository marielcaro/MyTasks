const app = new Vue({
    el: '#app',
    data: {
        titulo: 'My Tasks Vue',
        tareas: [],
        nuevatarea: ''
    },
    methods: {
        agregartarea: function() {
            this.tareas.push({
                nombre: this.nuevatarea,
                estado: false
            });
            localStorage.setItem('MyTasks-vue', JSON.stringify(this.tareas))
            this.nuevatarea = '';
        },
        cambiarestado: function(id) {
            this.tareas[id].estado = true;
            localStorage.setItem('MyTasks-vue', JSON.stringify(this.tareas))
        },
        eliminar: function(id) {
            this.tareas.splice(id, 1);
            localStorage.setItem('MyTasks-vue', JSON.stringify(this.tareas))
        }
    },
    created: function() {
        let datosDB = JSON.parse(localStorage.getItem('MyTasks-vue'));
        if (datosDB === null) {
            this.tareas = [];

        } else {
            this.tareas = datosDB;
        }

    }

})