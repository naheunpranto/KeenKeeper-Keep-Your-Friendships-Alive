import { create } from 'zustand';

export const useTimelineStore = create((set) => ({
  entries: [],
  addEntry: (newEntry) => set((state) => ({
    entries: [{ ...newEntry, id: Date.now(), date: new Date().toISOString() }, ...state.entries]
  }))
}));