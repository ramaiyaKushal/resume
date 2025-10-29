import { useEffect, useState } from "react";
import { loadMarkdownCollection, loadMarkdownFile } from "../utils/markdown";

export const useMarkdownFile = (resource) => {
  const [state, setState] = useState({
    data: {},
    content: "",
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;
    if (!resource) {
      setState((prev) => ({ ...prev, loading: false }));
      return;
    }

    const run = async () => {
      try {
        const { data, content } = await loadMarkdownFile(resource);
        if (!cancelled) {
          setState({ data, content, loading: false, error: null });
        }
      } catch (error) {
        if (!cancelled) {
          setState({ data: {}, content: "", loading: false, error });
        }
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [resource]);

  return state;
};

export const useMarkdownCollection = (context, options) => {
  const [state, setState] = useState({
    items: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        const items = await loadMarkdownCollection(context, options);
        if (!cancelled) {
          setState({ items, loading: false, error: null });
        }
      } catch (error) {
        if (!cancelled) {
          setState({ items: [], loading: false, error });
        }
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [context, options]);

  return state;
};
