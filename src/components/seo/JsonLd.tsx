/**
 * Inject a JSON-LD structured data block.
 *
 * SAFE: only call from server components with statically-known objects.
 * The data object is JSON.stringify'd, never reflects user input.
 */
export default function JsonLd<T extends Record<string, unknown>>({
  data,
}: {
  data: T;
}) {
  return (
    <script
      type="application/ld+json"
      // Safe: data is JSON.stringify'd from a static object built at compile time.
      // No user input is ever passed to this component.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
