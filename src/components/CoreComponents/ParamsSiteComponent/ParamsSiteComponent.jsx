import React, { useEffect, useState } from "react";
import { getParamsSite } from "../../../services/api";

const ParamsSiteComponent = () => {
  const [params, setParams] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadParams = async () => {
      try {
        const data = await getParamsSite();
        setParams(data);
      } catch (error) {
        console.error("Failed to fetch params:", error);
      } finally {
        setLoading(false);
      }
    };

    loadParams();
  }, []);

  return <></>;
};

export default ParamsSiteComponent;
