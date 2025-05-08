// src/components/sections/dynamic-summary-section.tsx
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { generateSummary, type GenerateSummaryInput } from '@/ai/flows/dynamic-summary-generator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { portfolioData } from '@/lib/data';
import { Bot, Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  keywords: z.string().min(3, { message: "Please enter at least one keyword." }),
});

type FormData = z.infer<typeof formSchema>;

export default function DynamicSummarySection() {
  const [generatedSummary, setGeneratedSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keywords: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setGeneratedSummary(null);
    try {
      const input: GenerateSummaryInput = {
        keywords: data.keywords,
        currentSummary: portfolioData.defaultSummaryForAI,
      };
      const result = await generateSummary(input);
      setGeneratedSummary(result.newSummary);
      toast({
        title: "Summary Generated!",
        description: "A new professional summary has been created.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error generating summary:", error);
      toast({
        title: "Error",
        description: "Failed to generate summary. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-summary" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Dynamic <span className="text-primary">Summary Generator</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Use AI to tailor Kian&apos;s professional summary based on keywords. This helps in targeting different roles or specializations.
        </p>
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Bot className="h-7 w-7 mr-3 text-primary" />
              Generate a New Summary
            </CardTitle>
            <CardDescription>
              Enter keywords (e.g., &quot;Fintech&quot;, &quot;E-commerce&quot;, &quot;Project Lead&quot;) to create a specialized summary.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="keywords">Keywords (comma-separated)</FormLabel>
                      <FormControl>
                        <Input id="keywords" placeholder="e.g., Flutter expert, Agile, Team Lead" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <h4 className="text-sm font-medium mb-1">Original Summary:</h4>
                  <p className="text-sm text-muted-foreground p-3 bg-muted/50 rounded-md border">
                    {portfolioData.defaultSummaryForAI}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-stretch gap-4">
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Summary
                    </>
                  )}
                </Button>
                {generatedSummary && (
                  <div className="mt-6 p-4 border rounded-md bg-background shadow">
                    <h3 className="text-lg font-semibold mb-2 text-primary">Generated Summary:</h3>
                    <Textarea readOnly value={generatedSummary} rows={6} className="bg-background text-foreground" />
                  </div>
                )}
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}
