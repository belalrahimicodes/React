
function List(){

    const cars = [{id: 1, name: "Lambo", model: 2010},
                  {id: 2, name: "Porsche", model: 2012},
                  {id: 3, name: "BMW", model: 2020},
                  {id: 4, name: "McLaren", model: 2025}];

    //cars.sort((a, b) => a.name.localeCompare(b.name));
    cars.sort((a, b) => a.model - b.model);

    const carsItems = cars.map(car => <li key={car.id}>{car.name}:&nbsp;
                               {car.model}</li>);

    return(
        <>
        <ul>{carsItems}</ul>
        </>
    );
}

export default List