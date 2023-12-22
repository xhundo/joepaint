// media hook

export const useMedia = (media: string) => {
  if (typeof window !== "undefined") {
    return window.matchMedia(media);
  }

  return { matches: null };
};
