import { useState } from 'react'

export function useCount(initilaValue = 0) {
  return useState(initilaValue)
}
