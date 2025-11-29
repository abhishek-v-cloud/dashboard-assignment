import { useEffect, useState, useCallback } from 'react';
import { fetchProfile, fetchEntities } from '../services/entityService';
import EntityCRUD from './EntityCRUD';
import Profile from './Profile';
import Nav from './Nav';

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [entities, setEntities] = useState([]);
  const [search, setSearch] = useState('');

  const loadProfile = useCallback(async () => {
    const data = await fetchProfile();
    setProfile(data);
  }, []);

  const loadEntities = useCallback(async () => {
    const data = await fetchEntities(search);
    setEntities(data);
  }, [search]);

  useEffect(() => {
    loadProfile();
    loadEntities();
  }, [loadProfile, loadEntities]);

  return (
    <>
      <Nav />
      <div className="container mt-4 fade-in" style={{maxWidth: "800px"}}>
        <h2>Dashboard</h2>
        {profile && <Profile profile={profile} reloadProfile={loadProfile} />}
        <div className="mt-4">
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Search entities..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <EntityCRUD entities={entities} reloadEntities={loadEntities} />
        </div>
      </div>
    </>
  );
}
