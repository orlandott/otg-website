import { TITAN_API_URL } from "@/lib/constants";

export interface WebsiteLead {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  email?: string;
  message?: string;
}

interface AddCustomerResponse {
  success?: boolean;
}

/**
 * Creates the lead in Titan CRM, tagged `source: "website"`. Resolves true only
 * when Titan confirms it; rejects on network or parse failures.
 */
export async function submitWebsiteLead(lead: WebsiteLead): Promise<boolean> {
  const res = await fetch(`${TITAN_API_URL}/api/customer/add-from-site`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...lead, source: "website" }),
  });
  const { success } = (await res.json()) as AddCustomerResponse;
  return Boolean(success);
}
