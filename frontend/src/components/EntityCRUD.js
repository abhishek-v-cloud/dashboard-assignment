import { useState } from 'react';
import { createEntityApi, updateEntityApi, deleteEntityApi } from '../services/entityService';

export default function EntityCRUD({ entities, reloadEntities }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);

  const handleSubmit = async () => {
    if (!title) return;
    if (editId) { await updateEntityApi(editId, { title, description }); setEditId(null); }
    else await createEntityApi({ title, description });

    setTitle(''); setDescription('');
    reloadEntities();
  };

  const handleEdit = (entity) => { setEditId(entity._id); setTitle(entity.title); setDescription(entity.description); };
  const handleDelete = async (id) => { await deleteEntityApi(id); reloadEntities(); };

  return (
    <div className="card p-3">
      <h4>Entities</h4>
      <input className="form-control mb-2" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input className="form-control mb-2" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <button className="btn btn-primary mb-2" onClick={handleSubmit}>{editId ? 'Update' : 'Add'}</button>

      <ul className="list-group">
        {entities.map(e => (
          <li key={e._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{e.title}</strong>: {e.description}
            </div>
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(e)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(e._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
