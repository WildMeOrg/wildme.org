import { useEffect, useState } from 'react';
import axios from 'axios';
import { get } from 'lodash-es';

export default function useSighting(query) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [statusCode, setStatusCode] = useState(null);
  const [refreshCount, setRefreshCount] = useState(0);

  function refresh() {
    setRefreshCount(refreshCount + 1);
  }

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const response = await axios.request({
            url: 'http://cthulhu.dyn.wildme.io:9090/api/v1/labels',
            method: 'get',
          });

          const responseStatusCode = get(response, ['status']);
          setStatusCode(responseStatusCode);
          const successful = responseStatusCode === 200;
          if (!successful) setError('Error!');

          console.log(response);
          setLoading(false);
          setData(get(response, ['data']));
        } catch (fetchError) {
          const responseStatusCode = get(fetchError, [
            'response',
            'status',
          ]);
          setStatusCode(responseStatusCode);
          console.error('Error fetching prometheus query');
          console.error(fetchError);
          setError('Error!');
          setLoading(false);
        }
      };

      fetchData();
    },
    [query, refreshCount],
  );

  return { data, loading, error, refresh, statusCode };
}
