import '../index.css'
import { DataTable } from '@repo/react-lib';

function App() {
  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'price', label: 'Price' },
    { key: 'category', label: 'Category' },
  ]
  
  const items = [
    { name: 'Apple', price: '$1.00', category: 'Fruit' },
    { name: 'Carrot', price: '$0.75', category: 'Vegetable' },
    { name: 'Bread', price: '$2.50', category: 'Grain' },
  ]

  return (
    <div className="p-12">
      <DataTable headers={headers} items={items} />
    </div>
  )
}

export default App
