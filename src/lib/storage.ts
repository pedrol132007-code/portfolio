/** localStorage que nunca derruba a página (modo privado, bloqueio de cookies etc.). */
export const storage = {
  get(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string) {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* sem armazenamento: a escolha vale só nesta visita */
    }
  },
};
