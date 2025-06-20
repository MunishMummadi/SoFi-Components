import type * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "./code-block"

interface ComponentShowcaseProps {
  title: string
  description: string
  preview: React.ReactNode
  code: string
  installation?: string
  usage?: string
}

export function ComponentShowcase({ title, description, preview, code, installation, usage }: ComponentShowcaseProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-sofi-gray-900 mb-2">{title}</h3>
        <p className="text-sofi-gray-600">{description}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-8 border border-dashed border-sofi-gray-200 rounded-lg bg-sofi-gray-50">
            {preview}
          </div>
        </CardContent>
      </Card>

      {installation && (
        <div>
          <h4 className="text-lg font-semibold text-sofi-gray-900 mb-3">Installation</h4>
          <CodeBlock code={installation} language="bash" />
        </div>
      )}

      <div>
        <h4 className="text-lg font-semibold text-sofi-gray-900 mb-3">Usage</h4>
        <CodeBlock code={code} />
      </div>

      {usage && (
        <div>
          <h4 className="text-lg font-semibold text-sofi-gray-900 mb-3">Additional Examples</h4>
          <CodeBlock code={usage} />
        </div>
      )}
    </div>
  )
}
