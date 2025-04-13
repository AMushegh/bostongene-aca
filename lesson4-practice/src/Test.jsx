import React, { useEffect, useRef, useState } from "react";

const getData = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res("data");
    }, 5000);
  });
};

const Test = () => {
  const isMounted = useRef(true);

  const [{ loading }, setState] = useState({
    loading: false,
    data: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState((prev) => ({ ...prev, loading: true }));

    getData()
      .then((data) => {
        if (isMounted.current) {
          setState((prev) => ({ ...prev, data }));
        }
      })
      .finally(() => {
        if (isMounted.current) {
          setState((prev) => ({ ...prev, loading: false }));
        }
      });
  }, []);

  if (loading) {
    return <div>Loading... </div>;
  }

  return <div>Test</div>;
};

export default Test;
