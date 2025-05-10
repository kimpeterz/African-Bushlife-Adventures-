import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    fetchItineraries();
  }, []);

  async function fetchItineraries() {
    const { data, error } = await supabase.from('itineraries').select('*');
    if (error) console.error(error);
    else setItineraries(data);
  }

  return (
    <div>
      <h1>African Bushlife Adventures</h1>
      <ul>
        {itineraries.map((item) => (
          <li key={item.id}>{item.title} - {item.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
