export default function setPayload(res, options) {
  return {
    statusCode: res.statusCode,
    message: options.message || "",
    totalPages: options.data || [],
    more: options.more || null,
  };
}
