
function List(){

    const cars = [{id: 1, name: "Lambo", model: 2010},
                  {id: 2, name: "Porsche", model: 2012},
                  {id: 3, name: "BMW", model: 2020},
                  {id: 4, name: "McLaren", model: 2025}];

    //cars.sort((a, b) => a.name.localeCompare(b.name));
    cars.sort((a, b) => a.model - b.model);

    const carsItems = cars.map(car => <li key={car.id}>{car.name}:&nbsp;
                               {car.model}</li>);
    
    const newModels = cars.filter(car => car.model > 2012);

    const newModelItems = newModels.map(newModel => <li 
                                        key={newModel.id}>{newModel.name}:&nbsp;
                                        {newModel.model}</li>);

    return(
        <>
        {cars.length > 0 ? <ul>{carsItems}</ul> : null}
        <h2>New Models</h2>
        {cars.length > 0 ? <ol>{newModelItems}</ol> : null}
        </>
    );
}

export default List