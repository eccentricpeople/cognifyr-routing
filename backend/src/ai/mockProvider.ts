export interface ClassificationResult {
  category: 'sales' | 'support' | 'urgent' | 'spam' | 'other'
  priority: 'low' | 'medium' | 'high'
  summary: string
  confidence: number
  reason: string
}

export async function classify(message: string): Promise<ClassificationResult> {
  // Simulate AI delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  const lower = message.toLowerCase()

  // Category detection
  let category: ClassificationResult['category'] = 'other'
  if (lower.includes('buy') || lower.includes('price') || lower.includes('plan') || lower.includes('upgrade')) {
    category = 'sales'
  } else if (lower.includes('help') || lower.includes('issue') || lower.includes('problem') || lower.includes('broken') || lower.includes('cannot access') || lower.includes('payment') || lower.includes('login')) {
    category = 'support'
  } else if (lower.includes('urgent') || lower.includes('asap') || lower.includes('emergency') || lower.includes('critical')) {
    category = 'urgent'
  } else if (lower.includes('discount') || lower.includes('free') || lower.includes('winner') || lower.includes('click here')) {
    category = 'spam'
  }

  // Priority detection
  let priority: ClassificationResult['priority'] = 'low'
  if (category === 'urgent' || lower.includes('payment') || lower.includes('cannot access') || lower.includes('down')) {
    priority = 'high'
  } else if (category === 'support' || lower.includes('error') || lower.includes('failed')) {
    priority = 'medium'
  }

  // Summary
  const words = message.split(' ').slice(0, 12).join(' ')
  const summary = `${category.charAt(0).toUpperCase() + category.slice(1)} request: "${words}..."`

  return {
    category,
    priority,
    summary,
    confidence: parseFloat((0.7 + Math.random() * 0.25).toFixed(2)),
    reason: `Message contains keywords indicating a ${category} issue with ${priority} priority.`
  }
}