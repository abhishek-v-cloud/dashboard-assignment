import { useState } from 'react';
import { updateProfileApi } from '../services/entityService';

export default function Profile({ profile, reloadProfile }) {
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);

  const handleUpdate = async () => {
    await updateProfileApi({ name, email });
    reloadProfile();
  };

  return (
    <div className="card p-3 mb-3">
      <h4>Profile</h4>
      <input className="form-control mb-2" value={name} onChange={e => setName(e.target.value)} />
      <input className="form-control mb-2" value={email} onChange={e => setEmail(e.target.value)} />
      <button className="btn btn-warning" onClick={handleUpdate}>Update Profile</button>
    </div>
  );
}
