// SDKの初期化（microCMS）
import { createClient } from 'microcms-js-sdk'

export const client = createClient({
	serviceDomain: import.meta.env.VITE_APP_MICROCMS_SERVICE_DOMAIN,
	apiKey: import.meta.env.VITE_APP_MICROCMS_API_KEY
});