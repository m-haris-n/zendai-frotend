import { gpt_link } from './baseInstances';

export const sendMsg = (msgbody: string, previous_history: Array<object>) => {
  const reqBody = {
    providers: 'openai',
    text: msgbody,
    chat_global_action: 'Follow user instructions',
    previous_history: previous_history,
    temperature: 0.0,
    settings: { openai: 'gpt-3.5-turbo' },
    max_tokens: 1000,
  };

  const res = gpt_link.post('', reqBody);
  return res;
};
