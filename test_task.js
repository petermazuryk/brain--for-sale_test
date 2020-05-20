const attempt = (available, allowed, prefere) => {
  if (available.length >= allowed.length) {
    const filtredAllowed = available.filter((v) => allowed.includes(v));
    if (filtredAllowed.length == 0) {
      return filtredAllowed;
    }
    if (filtredAllowed) {
      const filtredPrefere = filtredAllowed.filter((v) => prefere.includes(v));
      if (filtredPrefere.length == 0) {
        const minPrefere = Math.min(
          ...filtredAllowed.filter((v) => v < prefere)
        );
        return minPrefere;
      }
    }
  } else if (available.length <= allowed.length) {
    const filtredAllowed = allowed.filter((v) => available.includes(v));
    if (filtredAllowed.length == 0) {
      console.log(filtredAllowed);
      return;
    }
    if (filtredAllowed) {
      const filtredPrefere = filtredAllowed.filter((v) => prefere.includes(v));
      const maxValAval = Math.max(...filtredAllowed);
      const difference = (a, b) => {
        const s = new Set(b);
        const dif = a.filter((x) => !s.has(x));
        if (dif <= maxValAval) {
          filtredPrefere.push(maxValAval);
        }
        return filtredPrefere;
      };
      difference(prefere, filtredPrefere);
    }
  }
};

attempt(available, allowed, prefere);
