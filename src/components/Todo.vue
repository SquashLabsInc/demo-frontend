<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-12 padding-zero">
				<form id="todo-form">
				<div class="input-group">
					<input type="text" class="form-control" v-model="name" placeholder="Enter Todo Name" />
					<input type="text" class="form-control" v-model="description" placeholder="Enter Todo Description" />
					<button type="button" @click="addTodo()" class="btn-addtod bg-base">
						ADD TO-DO
					</button>
				</div>
				</form>
			</div>
			<table class="table">
				<thead class="bg-base">
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Description</th>
					<th>Action</th>
				</tr>
				</thead>
				<tbody>
					<tr v-for="todo in todos" :key="todo.id">
						<td>{{todo.id}}</td>
						<td>{{todo.name}}</td>
						<td>{{todo.description}}</td>
						<td><button @click="deleteTodo(todo.id)" class="fa fa-trash"  aria-hidden="true"></button></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>



export default {
	name: 'Todo',
	props: {
		msg: String
	},
	data() {
		return {
			todos: [],
			name: "",
			description: ""
		}
	},
	methods: {
		async getTodo() {
			try {
				const response = await fetch('http://18.217.89.199/api/todo')
				const data = await response.json()
				this.todos = data.results
			} catch (error) {
				console.error(error)
			}
		},

		async addTodo() {
			try {
				if(this.name == "" || this.description == ""){
					console.log("Empty field")
					event.preventDefault();
				}else{
					let todo_payload  = {
						'name': this.name,
						'description':this.description
					}
					const response = await fetch('http://18.217.89.199/api/todo/add', {
					method: 'POST',
					body: JSON.stringify(todo_payload),
					headers: { 'Content-type': 'application/json; charset=UTF-8' },
					})
					const data = await response.json()
					if(data) {
						this.name= ''
						this.description=''
						this.getTodo()
					}
					
				} 

			} catch (error) {
				console.error(error)
			}
		},

		async deleteTodo(id) {
			try {
				await fetch(`http://18.217.89.199/api/todo/${id}`, {
				method: "DELETE"
				});
				this.todos = this.todos.filter(todo => todo.id !== id);
			} catch (error) {
				console.error(error);
			}
		}
	},

	mounted() {
		this.getTodo()
	},
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
	padding: 50px;
}
.padding-zero {
	padding: 0px;
	margin: 0px;
}
.fa-pencil-square {
  margin-right: 20px;
  font-size: 25px;
  color: #f0ad4e;
}
.fa-trash {
  margin-right: 20px;
  font-size: 25px;
  color: #ac2925;
}

table {
  text-align: center;
  overflow-y: scroll;
}

.bg-base {
  background-color: #17a2b8;
  color: #fff;
}
.btn-addtod {
   width: 200px;
   border: none;
   height: 38px;
}
.fa-trash {
  background: none;
  border: none;
}
td {
  padding: 5px !important;
  margin: 5px;
}
tr {
  padding: 5px !important;
  margin: 5px;
}
</style>
