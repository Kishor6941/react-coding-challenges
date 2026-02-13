import React,{useState} from 'react'

const data = [
  'Apple',
  'Banana',
  'Mango',
  'Orange',
  'Pineapple',
  'Grapes',
  'Strawberry',
  'Watermelon',
];

const AutoComplete = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleChange = (value: string) => {
        setQuery(value);
        if(value.length > 0){
            const filteredSuggestions = data.filter(item => item.toLowerCase().includes(value.toLowerCase()));
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    }
  return (
    <div className='mx-auto mt-5 col-md-6'>
        <h2>AutoComplete</h2>
        <input 
            type="text" 
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Type to search..."
        />
        <ul>
            {suggestions.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default AutoComplete
