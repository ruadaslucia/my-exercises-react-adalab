// Fichero src/components/App.js
const App = () => {
  const tasks = [
    'Comprar harina, jamón y pan rallado',
    'Hacer croquetas ricas',
    'Ir a la puerta de un gimnasio',
    'Comerme las croquetas mirando a la gente que entra en el gimnasio',
  ];

  const renderTasks = () => {
    return tasks.map((index) => {
      console.log(tasks);
      return <li key={index}></li>;
    });
  };

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ul>{renderTasks(tasks.task)}</ul>
    </div>
  );
};

export default App;
