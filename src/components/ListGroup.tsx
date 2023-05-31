import { useState } from "react";


interface Props
{
	items: string[];
	heading: string
	//
	onSelectedItem: (item: string) =>void
}




function ListGroup(props:Props)
{

const [selectedIndex,setSelectedIndex] = useState(-1)

return (<div>
    <h1>--------------{props.heading}--------------</h1>
    <ul className="list-group">
        {props.items.map((item , index) => 
        
        <li className={ index === selectedIndex ? "list-group-item active" : 'list-group-item'}
		onClick={() => 
			{
			setSelectedIndex(index)
			props.onSelectedItem(item)
			}
		} 
        key={item}>{index + 1}.{item}</li>)}
    </ul>
</div>
)
}

export default ListGroup