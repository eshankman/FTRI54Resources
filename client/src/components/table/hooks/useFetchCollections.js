import { useEffect, useState } from 'react';

const useFetchCollection = (collection) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/data/${collection}`);
        const json = await res.json();
        console.log(`📦 Loaded ${collection}:`, json);
        setData(json);
      } catch (err) {
        console.error(`❌ Failed to fetch ${collection}:`, err);
      } finally {
        setLoading(false);
      }
    };

    if (collection) fetchData();
  }, [collection]);

  return { data, loading };
};

export default useFetchCollection;
