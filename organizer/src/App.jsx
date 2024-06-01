import { useState, useEffect } from 'react';
import axios from 'axios';
import CreatePartner from './Components/CreatePartner';
import PartnerList from './Components/PartnerList';
import './App.css';

function App() {
  const [partners, setPartners] = useState([]);

  const fetchPartners = async () => {
    const response = await axios.get('http://localhost:3005/partners');
    setPartners(response.data);
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const handleCreatePartner = async (name, description, isChecked, imgURL) => {
    const response = await axios.post('http://localhost:3005/partners', {
      partner_name: name,
      partner_description: description,
      check_status: isChecked,
      logo_url: imgURL,
    });
    const updatedPartners = [...partners, response.data];
    setPartners(updatedPartners);
  };

  const deletePartner = async (id) => {
    await axios.delete(`http://localhost:3005/partners/${id}`);
    const updatedPartners = partners.filter((partner) => partner.id !== id);
    setPartners(updatedPartners);
  };

  return (
    <div>
      <CreatePartner createPartner={handleCreatePartner} />
      <PartnerList partners={partners} onDelete={deletePartner} />
    </div>
  );
}

export default App;
