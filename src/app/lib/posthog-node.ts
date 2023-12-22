import { PostHog } from 'posthog-node';

export const client = new PostHog(String(process.env.POSTHOG_KEY), {
  host: 'https://app.posthog.com'
});
