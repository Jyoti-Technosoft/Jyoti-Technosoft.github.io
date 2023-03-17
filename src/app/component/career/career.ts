export interface Career {
  position: string;
  experience: string;
  requireLang: string[];
  role: { label: string; objectives: { responsiblity: string }[] }[];
}
