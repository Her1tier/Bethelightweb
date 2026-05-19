export type DonationFrequency = 'one-time' | 'monthly'

export interface DonationPayload {
  amount: number
  frequency: DonationFrequency
  firstName: string
  lastName: string
  email: string
  programId?: string
}

export interface DonationResult {
  success: boolean
  transactionId?: string
  message: string
}

/** Provider adapter boundary — swap mockDonationProvider for Stripe/Donorbox later */
export interface DonationProvider {
  submit(payload: DonationPayload): Promise<DonationResult>
}

const mockDonationProvider: DonationProvider = {
  async submit(payload) {
    await new Promise((r) => setTimeout(r, 1200))
    if (payload.amount < 1) {
      return { success: false, message: 'Amount must be at least $1.' }
    }
    if (!payload.email.includes('@')) {
      return { success: false, message: 'Please enter a valid email.' }
    }
    return {
      success: true,
      transactionId: `MOCK-${Date.now()}`,
      message: `Thank you! Your ${payload.frequency === 'monthly' ? 'monthly' : 'one-time'} donation of $${payload.amount} has been recorded. (Test mode — no payment processed.)`,
    }
  },
}

let activeProvider: DonationProvider = mockDonationProvider

export function setDonationProvider(provider: DonationProvider) {
  activeProvider = provider
}

export function getDonationProvider(): DonationProvider {
  return activeProvider
}

export async function submitDonation(payload: DonationPayload): Promise<DonationResult> {
  return activeProvider.submit(payload)
}
